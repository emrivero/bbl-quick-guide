const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const packageJsonPath = path.resolve(__dirname, "../package.json");
const packageJson = fs.readFileSync(packageJsonPath, "utf8");

const appJsonPath = path.resolve(__dirname, "../app.json");
const appJson = fs.readFileSync(appJsonPath, "utf8");

const version = JSON.parse(packageJson).version;
const newAppJson = appJson.replace(
  /"version": ".*"/,
  `"version": "${version}"`
);

fs.writeFileSync(appJsonPath, newAppJson);

// git add and commit
try {
  execSync(`git add app.json`);
  execSync(`git commit -m "chore: update app.json version to ${version}"`);
} catch (e) {
  console.error(e);
  process.exit(1);
}
