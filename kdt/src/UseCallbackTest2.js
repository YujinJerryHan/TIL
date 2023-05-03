import React, { useState, useCallback } from "react";

function Light(p) {
  const { room, on, toggle } = p;
  console.log({ room, on });//콘솔 출력(매번 Light 3개 실행-변화값 Light 출력)
  //SmartHome 컴포넌트 변수값 변경되면 렌더(자식 렌더)
  return (
    <button onClick={toggle}>
      {/*{room} {on ? "💡" : "⬛"}*/}
      {room} {on ? "켜짐" : "꺼짐"}
    </button>
  );
}

Light = React.memo(Light);

/*조명을 키거나 끄는 방에 대한 Light 컴포넌트 함수만 호출되게 하고 싶어서, React.memo()를 사용한 것인데 무엇이 문제일까요? 바로 조명을 제어할 때 쓰이는 toggleMaster(), toggleKitchen(), toggleBath() 함수의 참조값이 SmartHome 컴포넌트가 랜더링될 때마다 모두 바뀌어버리기 때문입니다.
이 문제를 해결하려면 모든 조명 제어 함수를 useCallback() hook 함수로 감싸고 두 번째 인자로 각 함수가 의존하고 있는 상태를 배열로 넘겨야 합니다. */

/*function SmartHome() {
  //State 3개 정의
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);
 
  // light 클릭 - 토클할 때마다 state값 변경
  const toggleMaster = () => setMasterOn(!masterOn);
  const toggleKitchen = () => setKitchenOn(!kitchenOn);
  const toggleBath = () => setBathOn(!bathOn);

  return (
    <>
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
    </>
  );
}

export default SmartHome;*/

function SmartHome() {//부모의 state가 변경되면서  부모 렌더링. 자식들도 렌더링 시작.
  //그러나 useCallback 사용하여 해당 변수 가진 배열 변경시만 자식인 Light 함수 생성하도록 함.
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);

  const toggleMaster = useCallback(() => setMasterOn(!masterOn), [masterOn]);
  const toggleKitchen = useCallback(() => setKitchenOn(!kitchenOn),[kitchenOn]);
  const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);

  return (
    <>
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
    </>
  );
}
export default SmartHome;