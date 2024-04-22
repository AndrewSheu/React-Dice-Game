import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <div className="Text">
        <h2>How to play dice game</h2>
        <p>
          Select any number <br />
          Click on dice image <br />
          after click on dice if selected number is equal to dice number you
          will get same point as dice <br />
          if you get wrong guess then 2 point will be dedcuted
        </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  p {
    margin-top: 24px;
  }
`;
