T({
  name: "test-tag",
  url: "https://github.com/mlizza/pico-example-target.git",
  up: ["sh", "echo", "ciao"],
  down: ["docker-compose", "down"]
});
