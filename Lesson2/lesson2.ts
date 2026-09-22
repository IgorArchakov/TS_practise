function greeting(name: string) {
    console.log(`Hello, ${name}!`);
}

greeting('Ihor')

function formatTestResult(name: string, passed: boolean): string {
   return `${name} ${passed ? 'passed' : 'failed'}`
}

console.log(formatTestResult('login', true));

let testArray = [1, 2, 3, 4]
let anyArray: any[] = [1, 'two', true, 5]

let testCases: string[] = ['login', 'logout', 'loginFalse', 'Profile', 'Settings'] 

function getTestCases.filter((testCase) => {
    return testCase.includes('login')
})

enum TestStatus {
    Passed,
    Failed,
    Skipped
}

function getStatusEmoji(status: TestStatus): string {
    switch (status) {
        case TestStatus.Passed:
            return '✅'
        case TestStatus.Failed:
            return '❌'
        case TestStatus.Skipped:
            return '⏭️'
        default:
            return ''
    }
}