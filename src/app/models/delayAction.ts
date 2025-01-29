export default class DelayAction {
    private static id: number | undefined = undefined;

    /**
     * 指定ミリ秒後にアクションを実行する\
     * 実行前に再度メソッドを呼び出すと、前回のアクションはキャンセルされる
     */
    static run = (action: () => void, delayMsec: number): void => {
        clearInterval(this.id);
        this.id = window.setTimeout(() => {
            action();
        }, delayMsec);
    };
}
