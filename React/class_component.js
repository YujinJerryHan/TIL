// 현재는 function 권장하기 때문에 참고만!

// class 컴포넌트 기본 틀
class Modal2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return 어쩌구;
    // 길고 복잡한 html~
  }
}

// class 컴포넌트에서 state 만들려면
class Modal2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'kim',
      age: 20,
    };
  }
  render() {
    return <div>{this.state.name}</div>;
  }
}

// class 컴포넌트에서 state 수정
class Modal2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'kim',
      age: 20,
    };
  }
  render() {
    return (
      <div>
        {this.state.name}
        <button
          onClick={() => {
            this.setState({ age: 21 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

// class 컴포넌트에서 props
class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kim',
      age: 20,
    };
  }
  render() {
    return (
      <div>
        {this.state.name}
        <button
          onClick={() => {
            this.setState({ age: 21 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}
