from selenium.webdriver.common.by import By


class ComponentPage:

    def __init__(self, driver):
        self.driver = driver

    component_screen = (By.CSS_SELECTOR, '[data-testid="component-screen"]')
    back_button = (By.CSS_SELECTOR, '[data-testid="back-button"]')
    components = {
        "fonologico": (By.CSS_SELECTOR, '[data-testid="component-fonologico"]'),
        "semantico": (By.CSS_SELECTOR, '[data-testid="component-semantico"]'),
        "sintactico": (By.CSS_SELECTOR, '[data-testid="component-sintactico"]'),
        "pragmatico": (By.CSS_SELECTOR, '[data-testid="component-pragmatico"]'),
    }
