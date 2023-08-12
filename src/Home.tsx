import "antd/dist/antd.css";

import { Button, Tag, Typography } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import AppLayout from "./AppLayout";
import { bonkSound } from "./bonk";
import { pop } from "./confetti";

// TODO: Styles to CSS
const Home = () => {
  useEffect(() => {
    document.title = "Persefoni Poker";
  }, []);
  return (
    <AppLayout>
      <Typography.Title>Welcome</Typography.Title>
      <p>
        Why pay for premium when you could just... <strong>not</strong> do that?
      </p>

      <div style={{ textAlign: "center" }}>
        <Link to="/new">
          <Button type="primary" size="large">
            Create a Game
          </Button>
        </Link>
        <Button type="primary" size="large" onClick={() => bonkSound.play()}>
          BONK
        </Button>
      </div>

      <h2>Recipe</h2>

      <a target="_blank" href="https://github.com/ZakRabe" rel="noreferrer">
        <Tag color="magenta">❤️</Tag>
      </a>

      <a
        target="_blank"
        href="https://firebase.google.com/docs/database"
        rel="noreferrer"
      >
        <Tag color="red">🔥 firebase v9</Tag>
      </a>

      <a target="_blank" href="https://ant.design/" rel="noreferrer">
        <Tag color="green">🐜 ant design v4</Tag>
      </a>

      <Tag style={{ cursor: "pointer" }} onClick={pop} color="cyan">
        🎉 canvas-confetti v1
      </Tag>

      <a
        target="_blank"
        href="https://reactrouter.com/en/main"
        rel="noreferrer"
      >
        <Tag color="blue">🚌 react-router v6</Tag>
      </a>

      <a target="_blank" href="https://reactjs.org/" rel="noreferrer">
        <Tag color="purple">♻️ react v17</Tag>
      </a>

      <a
        target="_blank"
        href="https://github.com/ZakRabe/persefoni-poker"
        rel="noreferrer"
      >
        <Tag color="">⌨️ source</Tag>
      </a>
    </AppLayout>
  );
};

export default Home;
