import { test, expect } from '@playwright/test';
import {sum, sum2} from "../calculate/sum";

test('sum values', async ({  }) => {
 expect(sum(1,2)).toBe(3)
  expect(sum2(1,4)).toBe(5)
});


