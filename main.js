T({
  name: "test-tag",
  url: "https://github.com/mlizza/pico-example-target.git?ref=1.0.0",
  up: ["docker-compose", "up", "-d"],
  down: ["docker-compose", "down"]
});
