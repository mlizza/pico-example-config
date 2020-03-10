T({
  name: "pico-test-one",
  url: "https://github.com/picostack/pico",
  up: ["ls", "-la"],
  down: ["stat", "README.md"]
});
