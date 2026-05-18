from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class LoginPage:

    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(driver, 15)

    email_input = (By.CSS_SELECTOR, '[data-testid="email-input"]')
    password_input = (By.CSS_SELECTOR, '[data-testid="password-input"]')
    login_button = (By.CSS_SELECTOR, '[data-testid="login-button"]')
    login_error = (By.CSS_SELECTOR, '[data-testid="login-error"]')

    def login(self, email, password):
        self.wait.until(EC.visibility_of_element_located(self.email_input)).send_keys(email)
        self.driver.find_element(*self.password_input).send_keys(password)
        self.driver.find_element(*self.login_button).click()
