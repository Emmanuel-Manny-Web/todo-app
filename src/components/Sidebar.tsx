import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Button from "./Button";
import Form from "./Form";

export default function Sidebar() {
  const { login, register, logout, isLoading, isAuthenticated, user } = useKindeAuth()
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
      <Form />

      <div className="mt-auto space-y-2">
        {isLoading ? null : isAuthenticated ? (
          <>
            <p className="text-sm">Logged in as {user?.email}</p>

            <Button onClick={logout} name="Log out" type="secondary" />
          </>
        ) : (
          <>
            <Button onClick={login} name="Log in" type="secondary" />
            <Button onClick={register} name="Register" type="secondary" />
          </>
        )}
      </div>
    </section>
  );
}
