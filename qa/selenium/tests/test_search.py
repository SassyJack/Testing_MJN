from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

from pages.home_page import HomePage

def test_search():

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install())
    )

    driver.maximize_window()

    driver.get(
        "https://www.automationexercise.com/products"
    )

    home = HomePage(driver)

    home.search_product("dress")

    driver.save_screenshot(
        "screenshots/search.png"
    )

    assert "search" in driver.current_url

    driver.quit()
