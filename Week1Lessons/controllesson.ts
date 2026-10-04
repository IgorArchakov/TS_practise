//Task 1
const n = 7                                             
console.log(`${n > 5 ? 'big' : 'small'}-${n}`)              // big-7
console.log(`${n % 2 === 0 ? '✅' : '❌'} even check`)       //'❌' even check
console.log('result: ' + n + 1)                             // result 71
console.log(`result: ${n + 1}`)                             //result 8

function formatBugTitle(id: number, title: string, isBlocker: boolean): string {
    return (`[CAR-${id}]${isBlocker === true ? '[BLOCKER]' : ''} ${title}`)
}

console.log(formatBugTitle(123, 'Login fails', true))

//Task 2
const cases = ['Smoke: login', 'smoke: logout', 'Regression: profile', 'SMOKE API']   
console.log(cases.filter(c => c.includes('Smoke')).length)                              //1
console.log(cases.filter(c => c.toLowerCase().includes('smoke')).length)                //3
console.log(cases.length)                                                              //4


type TestStatus = 'passed' | 'failed' | 'skipped'

export interface TestResult {
    readonly id: number
    name: string
    status: TestStatus
    durationMs: number
    bugId?: string 
}

interface TestSuite {
    suiteName: string
    cases: TestResult[]
}

export const testRun: TestResult[] = [
    {
        id: 1,
        name: "Test Case 1",
        status: 'passed',
        durationMs: 1000

    },
    {
        id: 2,
        name: "Test Case 2",
        status: 'failed',
        durationMs: 2000,
        bugId: "CAR-1234"
    },
    {
        id: 3,
        name: "Test Case 3",
        status: 'passed',
        durationMs: 500
    },
    {
        id: 4,
        name: "Test Case 4",
        status: 'skipped',
        durationMs: 0
    },
    {
        id: 5,
        name: "Test Case 5",
        status: 'failed',
        durationMs: 1500,
        bugId: "CAR-5678"
    },
    {
        id: 6,
        name: "Test Case 6",
        status: 'passed',
        durationMs: 1000
    }
]

function getSlowTests(results: { name: string, durationMs: number }[], thresholdMs: number): string[] {
    return(results.filter(r =>r.durationMs > thresholdMs).map(r =>r.name))
}

console.log(getSlowTests(testRun, 1000))

//Task 3
