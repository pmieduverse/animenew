import { chromium } from "playwright";
import fs from "node:fs";

const dir = "/workspace/screenshots";
fs.mkdirSync(dir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.on("pageerror", (e) => console.log("PAGEERROR", e.message));
page.on("console", (m) => {
  if (m.type() === "error") console.log("CONSOLE", m.text());
});

const power = (name) => page.getByRole("button", { name: new RegExp(`^${name}\\b`) });

await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.waitForTimeout(400);
await page.screenshot({ path: `${dir}/qa-01-title.png` });

await page.getByRole("button", { name: "New Awakening" }).click();
await page.waitForTimeout(300);
await page.screenshot({ path: `${dir}/qa-02-identity.png` });

await page.getByPlaceholder("Kael").fill("Rin");
await page.getByRole("button", { name: /Shadow Clan/ }).click();
await page.getByRole("button", { name: "Choose powers" }).click();
await page.waitForTimeout(300);
await page.screenshot({ path: `${dir}/qa-03-powers.png` });

await power("Fire").click();
await power("Lightning").click();
await power("Wind").click();
await page.getByRole("button", { name: "Awaken" }).click();
await page.waitForTimeout(1200);
await page.screenshot({ path: `${dir}/qa-04-awaken-1.png` });
await page.waitForTimeout(4500);
await page.screenshot({ path: `${dir}/qa-05-awaken-rank.png` });

await page.getByRole("button", { name: "Enter the world" }).click();
await page.waitForTimeout(400);
await page.screenshot({ path: `${dir}/qa-06-hub.png` });

await page.getByRole("button", { name: "Enter arena" }).click();
await page.waitForTimeout(800);
await page.screenshot({ path: `${dir}/qa-07-battle.png` });

const probe = await page.evaluate(() => {
  const t = window.__controlsTest;
  if (!t) return { ok: false, reason: "no probe" };
  const x0 = t.getX();
  const y0 = t.getY();
  t.setKeys(["KeyD"]);
  return { ok: true, x0, y0 };
});
await page.waitForTimeout(400);
const afterD = await page.evaluate(() => {
  const t = window.__controlsTest;
  const x = t.getX();
  const y = t.getY();
  const spd = t.getSpeed();
  t.setKeys(["KeyA"]);
  return { x, y, spd };
});
await page.waitForTimeout(400);
const afterA = await page.evaluate(() => {
  const t = window.__controlsTest;
  const x = t.getX();
  const spd = t.getSpeed();
  t.clearKeys();
  return { x, spd };
});
await page.screenshot({ path: `${dir}/qa-08-moved.png` });

console.log(JSON.stringify({ probe, afterD, afterA, dxD: afterD.x - probe.x0, dxA: afterA.x - afterD.x }, null, 2));

await page.keyboard.down("KeyJ");
await page.keyboard.up("KeyJ");
await page.waitForTimeout(200);
await page.screenshot({ path: `${dir}/qa-09-slash.png` });

await browser.close();
