module.exports = async (page, scenario) => {
  // Wait for the page to navigate
  await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 30000 }); // Adjust timeout as needed
};
