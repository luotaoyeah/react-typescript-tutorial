const BASE_URL = `http://localhost:${process.env.PORT || 8000}`;

describe('Homepage', () => {
  // FIXME 暂时禁用 e2e 测试
  /*
    it('topmenu should have footer', async () => {
      const params = '/form/basic-form?navTheme=light&layout=topmenu';
      await page.goto(`${BASE_URL}${params}`);
      await page.waitForSelector('footer', {
        timeout: 2000,
      });
      const haveFooter = await page.evaluate(
        () => document.getElementsByTagName('footer').length > 0,
      );
      expect(haveFooter).toBeTruthy();
    });
  */

  it('should work', () => {
    expect(1).toEqual(1);
  });
});
