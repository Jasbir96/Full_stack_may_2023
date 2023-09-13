/**
 * 1. peformances in react code
 *      a.)  UseMemo : is used to prevent repetiton of time taking calculation
 *      b.) useCallback: 
 * 
 * 
 * 
 * 
 * **/

import { useMemo } from "react";
const UseMemoConcept = ({ value }) => {
    const computeResult = () => {
        let futureTime = Date.now() + 1000;
        while (Date.now() < futureTime) {

        }
        return value * value;
    }
    // first call the computeresult
    const cacheResult = useMemo(function () {
        return computeResult(value);
    }, [value])
    return (
        <>
            <div>Value: {value}</div>
            <div>Memoized value: {cacheResult}</div>
        </>
    )
}

export default UseMemoConcept;