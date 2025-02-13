const HintButton = () => {
  return (
    <button
      onClick={() =>
        alert("See Quest Master for help. But it will cost you a coupon!")
      }
      className="border w-full my-3 border-dusty-rose rounded-4xl h-12 shadow-md "
    >
      Hint
    </button>
  );
};

export default HintButton;
