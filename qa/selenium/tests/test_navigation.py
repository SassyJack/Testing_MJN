from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from pages.home_page import HomePage
from pages.component_page import ComponentPage
from pages.level_page import LevelPage
from pages.activity_page import ActivityPage


class TestNavigation:

    def test_home_to_component_selector(self, logged_in_driver):
        driver = logged_in_driver
        wait = WebDriverWait(driver, 10)

        home = HomePage(driver)
        assert home.home_screen, "No se ve la pantalla de home"

        driver.find_element(*home.start_button).click()
        wait.until(EC.visibility_of_element_located(ComponentPage.component_screen))

        component = ComponentPage(driver)
        assert driver.find_element(*component.component_screen).is_displayed()

    def test_all_components_visible(self, logged_in_driver):
        driver = logged_in_driver
        wait = WebDriverWait(driver, 10)
        driver.find_element(*HomePage.start_button).click()
        wait.until(EC.visibility_of_element_located(ComponentPage.component_screen))

        component = ComponentPage(driver)
        for name, locator in component.components.items():
            el = driver.find_element(*locator)
            assert el.is_displayed(), f"Componente {name} no visible"

    def test_component_to_level_selector(self, logged_in_driver):
        driver = logged_in_driver
        wait = WebDriverWait(driver, 10)

        driver.find_element(*HomePage.start_button).click()
        wait.until(EC.visibility_of_element_located(ComponentPage.component_screen))

        driver.find_element(*ComponentPage.components["fonologico"]).click()
        wait.until(EC.visibility_of_element_located(LevelPage.level_screen))

        level = LevelPage(driver)
        assert driver.find_element(*level.level_screen).is_displayed()

    def test_level_loads_activity(self, logged_in_driver):
        driver = logged_in_driver
        wait = WebDriverWait(driver, 10)

        driver.find_element(*HomePage.start_button).click()
        wait.until(EC.visibility_of_element_located(ComponentPage.component_screen))
        driver.find_element(*ComponentPage.components["fonologico"]).click()
        wait.until(EC.visibility_of_element_located(LevelPage.level_screen))

        driver.find_element(*LevelPage(driver).level(1)).click()
        wait.until(EC.visibility_of_element_located(ActivityPage.activity_screen))

        activity = ActivityPage(driver)
        assert driver.find_element(*activity.activity_screen).is_displayed()
        assert driver.find_element(*activity.activity_title).is_displayed()
