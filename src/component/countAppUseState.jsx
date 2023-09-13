import React, { useState } from "react";
// const [state, setState] = useState(initState)
// + initState: giá trị khởi tạo của state
//       - Các kiểu dữ liệu nguyên thủy: number, string, boolean,..
//       - Các kiểu dữ liệu array, object, function
// + setState: là một hàm, hàm này có nhiệm vụ, cập lại trạng mới cho state
//       - Cập nhật trực tiếp
//       - Cập nhật bằng sử dụng callback function
// Cơ chế hoạt đông:
// MỖI KHI CẬP NHẬT STATE THÌ COMPONENT SẼ ĐƯỢC RE-RENDER

function CountAppUseState() {
    const [count, setCount] = useState(0);
    const [doimau, setDoimau] = useState(false);

    const handleIncreamentCount = () => {
        setCount(count + 1);
        setDoimau(true);
    }

    const handleReductCount = () => {
        if (count > 0) {
            setCount(count - 1);
            setDoimau(false);
        }

    }
    return (
        <div>
            <h1 className={`${doimau ? 'text-success' : 'text-danger'}`}>Count: {count}</h1>
            <button onClick={handleIncreamentCount}>Tăng Count</button>
            <button disabled={count === 0 ? true : false} onClick={handleReductCount}>Giảm Count</button>
        </div>
    )
}
export default CountAppUseState;