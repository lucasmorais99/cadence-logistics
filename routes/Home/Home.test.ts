import { describe, test, expect, beforeEach, afterAll } from "vitest";
import HomeVue from "./Home.vue";
import setup from "@/tests/setup";

describe("Home.vue", () => {
   beforeEach(() => {
      setup.stage(HomeVue);
   });

   test("should show section 1 text", () => {
      let section1 = setup.wrapper.find("section.Section-1");
      expect(section1.text()).toContain("Seu produto no destino, rápido e eficiente.");
      const button = section1.find("button.Action-Button");
      expect(button.text()).toBe("Pedir uma cotação");
   });

   test("should show section 2 text", () => {
      let section2 = setup.wrapper.find("section.Section-2");
      expect(section2.text()).toContain("Barato e acessível para todos.");
      const button = section2.find("button.Action-Button");
      expect(button.text()).toBe("Veja nossos preços");
   });

   test("should show section 3 text", () => {
      let section3 = setup.wrapper.find("section.Section-3");
      expect(section3.text()).toContain("Entregas seguras e rastreadas.");
      const button = section3.find("button.Action-Button");
      expect(button.text()).toBe("Ver mais");
   });

   test("should show section 4 text", () => {
      let section4 = setup.wrapper.find("section.Section-4");
      expect(section4.text()).toContain("Pronto para começar?");
      const button = section4.find("button.Action-Button");
      expect(button.text()).toBe("Enviar um item");
   });
});
