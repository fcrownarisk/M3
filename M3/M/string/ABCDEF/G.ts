function simulateGoto(gotoLabel: string): void {
    // 使用一个对象来存储当前执行状态
    const state = { [gotoLabel]: true };

    try {
        // 模拟 goto 跳转
        if (state[gotoLabel]) {
            // 这里放置当跳转发生时应该执行的代码
            console.log('Jump to ' + gotoLabel);
        } else {
            // 这里放置默认情况下应该执行的代码
            console.log('Normal execution');
        }
    } finally {
        // 在 finally 块中清除状态，防止重复跳转
        delete state[gotoLabel];
    }
}
// 使用示例
simulateGoto('label1');