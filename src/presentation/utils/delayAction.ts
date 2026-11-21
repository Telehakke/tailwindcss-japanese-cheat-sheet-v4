export class DelayAction {
  private timerId: number | undefined = undefined;

  /**
   * 指定ミリ秒後にアクションを実行する\
   * 実行前に再度メソッドを呼び出すと、前回のアクションはキャンセルされる
   */
  run = (action: () => void, delayMsec: number): void => {
    window.clearInterval(this.timerId);
    this.timerId = window.setTimeout(() => {
      action();
    }, delayMsec);
  };
}
