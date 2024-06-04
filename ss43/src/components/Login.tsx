import Button from "react-bootstrap/Button";

export default function Login() {
  return (
    <div>
      <div className="flex justify-center mt-16">
        <img
          className="w-96 rounded-l-lg"
          src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/v6bwf3e8qhdfhrgq7lv3/V%C3%A9C%C3%B4ngVi%C3%AAnGi%E1%BA%A3iTr%C3%ADIMGWorldsofAdventure%E1%BB%9FDubai.jpg"
          alt=""
        />
        <div className="px-4">
          <div className="font-bold text-xl mt-4">Login</div>
          <br />
          <div>
            <div>
              <p className="mb-1.5">E-mail</p>
              <input
                className="px-3 border-solid h-10 w-96 border-2 rounded-md"
                type="text"
                placeholder="Placeholder content"
              />
            </div>
            <br />
            <div className="mb-3">
              <p className="mb-1.5 ">Password</p>
              <input
                className=" px-3 border-solid h-10 w-96 border-2 rounded-md"
                type="text"
                placeholder="Placeholder content"
              />
            </div>
            <p className="mb-3 ml-[283px] text-xs font-bold">
              Forgot password?
            </p>
          </div>
          <div>
            <Button className="w-96" variant="primary">
              Login
            </Button>
            <br />
            <br />
            <div className="flex items-center justify-center">
              <div className="border-b border-gray-300 w-full"></div>
              <span className="px-4 text-gray-500 font-light text-xs">or</span>
              <div className="border-b border-gray-300 w-full"></div>
            </div>
            <br />
            <Button
              className="w-96 hover:border-sky-300 border-current"
              variant=""
            >
              Register now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
