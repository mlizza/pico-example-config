T({
  name: "pico-test-one",
  url: "https://github.com/picostack/example-target",
  up: ["docker-compose", "up", "-d"],
  down: ["docker-compose", "down"]
});
