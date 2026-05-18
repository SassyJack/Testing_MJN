import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from pathlib import Path

EMAIL = "donthorfinn777@gmail.com"
PASSWORD = "thors1234"
SCREENSHOT_DIR = Path("screenshots")
SCREENSHOT_DIR.mkdir(exist_ok=True)


@pytest.fixture
def driver(request):
    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install())
    )
    driver.maximize_window()
    driver.get("https://linguplay-test.onrender.com")
    yield driver
    driver.quit()


@pytest.fixture
def logged_in_driver(driver):
    driver.find_element(By.CSS_SELECTOR, '[data-testid="email-input"]').send_keys(EMAIL)
    driver.find_element(By.CSS_SELECTOR, '[data-testid="password-input"]').send_keys(PASSWORD)
    driver.find_element(By.CSS_SELECTOR, '[data-testid="login-button"]').click()
    WebDriverWait(driver, 15).until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, '[data-testid="home-screen"]'))
    )
    return driver


@pytest.hookimpl(tryfirst=True, hookwrapper=True)
def pytest_runtest_makereport(item, call):
    outcome = yield
    report = outcome.get_result()
    if report.when == "call":
        driver = item.funcargs.get("driver") or item.funcargs.get("logged_in_driver")
        if driver:
            test_name = item.nodeid.replace("::", "-").replace("/", "-").replace("\\", "-")
            screenshot_path = SCREENSHOT_DIR / f"{test_name}.png"
            driver.save_screenshot(str(screenshot_path))
            if hasattr(report, "extra"):
                from pytest_html import extras
                report.extra.append(extras.image(str(screenshot_path)))
