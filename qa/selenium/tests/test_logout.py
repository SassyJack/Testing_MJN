from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from pages.login_page import LoginPage


class TestLogout:

    def test_logout_returns_to_login(self, logged_in_driver):
        driver = logged_in_driver
        wait = WebDriverWait(driver, 10)

        driver.find_element(By.CSS_SELECTOR, '[data-testid="logout-button"]').click()

        wait.until(EC.visibility_of_element_located(LoginPage.email_input))
        assert driver.find_element(*LoginPage.login_button).is_displayed()
