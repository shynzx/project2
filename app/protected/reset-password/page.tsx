import { resetPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
      <h1 className="text-2xl font-medium">Reiniciar contraseña</h1>
      <p className="text-sm text-foreground/60">
        por favor introduce nueva contraseña.
      </p>
      
      <p className="text-sm text text-foreground">
          ¿Ya tienes una cuenta?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Iniciar sesión
          </Link>
        </p>
      <Label htmlFor="password">Nueva contraseña</Label>
      <Input
        type="password"
        name="password"
        placeholder="New password"
        required
      />
      <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        required
      />
      <SubmitButton formAction={resetPasswordAction}>
        Reiniciar contraseña
      </SubmitButton>
      <FormMessage message={searchParams} />
    </form>
  );
}
