T({
  name: "test-tag",
  url: "https://github.com/mlizza/pico-example-target.git",
  up: ["sh", "up.sh"],
  down: ["docker-compose", "down"]
});
