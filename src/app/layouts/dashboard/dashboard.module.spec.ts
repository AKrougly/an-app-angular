import { UiModule } from './dashboard.module';

describe('DashboardModule', () => {
  let uiModule: UiModule;

  beforeEach(() => {
    uiModule = new UiModule();
  });

  it('should create an instance', () => {
    expect(uiModule).toBeTruthy();
  });
});
