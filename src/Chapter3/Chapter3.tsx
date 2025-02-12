import { useNavigate } from "react-router";

const Chapter3 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between p-6">
      <h1 className="font-lavishly-yours text-4xl text-saddle-brown mb-3">
        Chapter Three: Sanctuary of Serenity
      </h1>
      <p>
        The Wayfinder's surface ripples like disturbed water, droplets of light
        dancing across its face as script emerges like perfumed steam rising
        from warm waters:
      </p>
      <div className="flex flex-col bg-rose-pink p-3 rounded-sm italic shadow-md">
        <div className="my-1">
          <p>Beyond the realm of daily pace,</p>
          <p>There lies a hidden, sacred space,</p>
          <p>Where waters whisper secrets sweet,</p>
          <p>Where solitude and comfort meet.</p>
        </div>
        <div className="my-1">
          <p>Not where morning rituals flow,</p>
          <p>But where quiet moments softly go,</p>
          <p>A chamber meant for peaceful rest,</p>
          <p>Holds your final treasure quest.</p>
        </div>
        <div className="my-1">
          <p>In porcelain depths of pure white,</p>
          <p>Where bubbles dance in gentle light,</p>
          <p>A gift awaits to soothe your soul,</p>
          <p>To make your weary spirit whole.</p>
        </div>
      </div>
      <p>
        But before you seek this sanctuary of calm, let's play one last game:
        "Elements of Enchantment." Below are four sensory riddles. Each answer
        reveals an essential element of the perfect relaxation ritual.
      </p>
      <button
        className="border w-full my-3 border-dusty-rose rounded-4xl h-12 shadow-md disabled:bg-deep-gray disabled:opacity-75 disabled:text-light-pink disabled:border-0"
        onClick={() => navigate("/chapter3/puzzle")}
      >
        Play!
      </button>
    </div>
  );
};

export default Chapter3;
