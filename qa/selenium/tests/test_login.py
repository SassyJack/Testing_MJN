from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from pages.login_page import LoginPage

EMAIL = "donthorfinn777@gmail.com"
PASSWORD = "thors1234"


class TestLogin:

    def test_login_success(self, driver):
        login_page = LoginPage(driver)
        login_page.login(EMAIL, PASSWORD)

        wait = WebDriverWait(driver, 15)
        home = wait.until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, '[data-testid="home-screen"]'))
        )
        assert home.is_displayed(), "Home screen no visible tras login"

    def test_login_invalid(self, driver):
        login_page = LoginPage(driver)
        login_page.login("invalido@correo.com", "wrongpass")

        wait = WebDriverWait(driver, 5)
        error = wait.until(
            EC.visibility_of_element_located(login_page.login_error)
        )
        assert error.is_displayed(), "Mensaje de error no visible"
