from selenium.webdriver.common.by import By


class HomePage:

    def __init__(self, driver):
        self.driver = driver

    home_screen = (By.CSS_SELECTOR, '[data-testid="home-screen"]')
    start_button = (By.CSS_SELECTOR, '[data-testid="start-button"]')
    user_name = (By.CSS_SELECTOR, '[data-testid="user-name"]')
