import Image from "next/image";
import React from "react";

const Event = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center py-3 "
      style={{
        marginTop: "5%",
      }}
    >
      <div
        className="d-flex flex-md-row flex-column justify-content-center align-items-center gap-4  my-5"
        style={{ backgroundColor: "#d5f7f76e", borderRadius: "10px" }}
        data-aos={"fade-up"}
        data-aos-delay="100"
      >
        <Image src="/img/events/e1.jpg" height={300} width={300} alt="img" />
        <div
          className="text-center"
          style={{
            maxWidth: "600px",
          }}
        >
          <h3>UmmedUtsav 2022</h3>
          <p className="px-5">
            5 December 2022 we organised a event named Ummedutsav 2018 and it is
            very succesuful event.All participents are very exited and greatful
            to see more.
          </p>
        </div>
      </div>

      <div
        className="d-flex flex-md-row flex-column justify-content-center align-items-center gap-4 rounded-3 my-1"
        style={{ backgroundColor: "#d5f7f76e", borderRadius: "25px" }}
        data-aos={"fade-up"}
        data-aos-delay="100"
      >
        <div
          className="text-center"
          style={{
            maxWidth: "600px",
          }}
        >
          <h3>Mr. Chetan Cheetah</h3>
          <p className="px-5">
            We organise a event for welcoming Know about 45-year old CRPF
            commanding officer Chetan Cheetah who was in deep coma for weeks
            after he was hit see more.
          </p>
        </div>
        <Image src="/img/events/e2.jpg" height={300} width={300} alt="img" />
      </div>

      <div
        className="d-flex flex-md-row flex-column justify-content-center align-items-center gap-4 rounded-3 my-5"
        style={{ backgroundColor: "#d5f7f76e", borderRadius: "25px" }}
        data-aos={"fade-up"}
        data-aos-delay="100"
      >
        <Image src="/img/events/e3.jpg" height={300} width={300} alt="img" />
        <div
          className="text-center"
          style={{
            maxWidth: "600px",
          }}
        >
          <h3>Walk O Run 2018</h3>
          <p className="px-5">
            Walk-O-Run will be held on Feb 19 at Umed Club. The 2nd Edition of
            WALK-O-Run is here! One of the biggest public health events in India
          </p>
        </div>
      </div>

      <div
        className="d-flex flex-md-row flex-column justify-content-center align-items-center gap-4 rounded-3 my-1"
        style={{ backgroundColor: "#d5f7f76e", borderRadius: "25px" }}
        data-aos={"fade-up"}
        data-aos-delay="100"
      >
        <div
          className="text-center"
          style={{
            maxWidth: "600px",
          }}
        >
          <h3>Kabir Cafe 2019</h3>
          <p className="px-5">
            Shree ummed club kota organise a programe Known as Kabir Cafe an
            very succesful event. All participents are very exited and greatful.
          </p>
        </div>
        <Image src="/img/events/e4.jpg" height={300} width={300} alt="img" />
      </div>

      <div
        className="d-flex flex-md-row flex-column justify-content-center align-items-center gap-4 rounded-3 my-5"
        style={{ backgroundColor: "#d5f7f76e", borderRadius: "25px" }}
        data-aos={"fade-up"}
        data-aos-delay="100"
      >
        <Image src="/img/events/e5.jpg" height={300} width={300} alt="img" />
        <div
          className="text-center"
          style={{
            maxWidth: "600px",
          }}
        >
          <h3>Felicitation</h3>
          <p className="px-5">
            If your actions inspire others to dream more, learn more, do more
            and become more, you are a leader.There are certain things in which
          </p>
        </div>
      </div>

      <div
        className="d-flex flex-md-row flex-column justify-content-center align-items-center gap-4 rounded-3 my-1"
        style={{ backgroundColor: "#d5f7f76e", borderRadius: "25px" }}
        data-aos={"fade-up"}
        data-aos-delay="100"
      >
        <div
          className="text-center"
          style={{
            maxWidth: "600px",
          }}
        >
          <h3>Flag Hoisting</h3>
          <p className="px-5">
            India celebrates its Republic Day every year on the 26th of January.
            As the history states, the Constitution of India, which is the
            longest
          </p>
        </div>
        <Image src="/img/events/e6.jpg" height={300} width={300} alt="img" />
      </div>
    </div>
  );
};

export default Event;
