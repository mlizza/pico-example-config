T({
  name: "test01",
  url: "https://github.com/mlizza/pico-example-target.git",
  up: ["docker-compose", "up", "-d"],
  down: ["docker-compose", "down"],
  branch: "master"
});
