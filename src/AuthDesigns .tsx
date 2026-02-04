import LoginForm from "./components/AuthDesign/loginForm";
import RegisterForm from "./components/AuthDesign/registerForm";
import AdvancedForm from "./components/AuthDesign/advancedForm";
import FullAdvanceedForm from "./components/AuthDesign/fullAdvancedForm";

const AuthDesigns = () => {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-gradient-to-br from-slate-900 to-slate-800">
      <section className="min-h-screen snap-start flex items-center justify-center p-6 animate-fade">
        <LoginForm />
      </section>

      <section className="min-h-screen snap-start flex items-center justify-center p-6 animate-fade">
        <RegisterForm />
      </section>

      <section className="min-h-screen snap-start flex items-center justify-center p-6 animate-fade">
        <AdvancedForm />
      </section>

      <section className="min-h-screen snap-start flex items-center justify-center p-6 animate-fade">
        <FullAdvanceedForm />
      </section>
    </div>
  );
};

export default AuthDesigns;
