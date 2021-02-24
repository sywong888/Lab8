const formatVolumeIconPath = require('../assets/scripts/main');

describe('volume icon path', () => {
    test('is 3 when volume is greater than 66', () => {
      formatVolumeIconPath(67);
      expect(iconLevel).toBe("3");
      expect(formatVolumeIconPath(67)).toMatch('./assets/media/icons/volume-level-3.svg');
    }),
    test('is 2 when volume is greater than 33 and less than 67', () => {
        formatVolumeIconPath(34);
        expect(iconLevel).toBe("2");
        expect(formatVolumeIconPath(34)).toMatch('./assets/media/icons/volume-level-2.svg');
    }),
    test('is 1 when volume is greater than 0 and less than 34', () => {
        formatVolumeIconPath(1);
        expect(iconLevel).toBe("1");
        expect(formatVolumeIconPath(1)).toMatch('./assets/media/icons/volume-level-1.svg');
    }),
    test('is 0 when volume is 0', () => {
        formatVolumeIconPath(0);
        expect(iconLevel).toBe("0");
        expect(formatVolumeIconPath(0)).toMatch('./assets/media/icons/volume-level-0.svg');
    });
});