import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

const FormDetailsPage = async ({ params }: { params: { formId: string } }) => {
  const { userId, redirectToSignIn } = await auth();
  const { formId } = params;

  if (!userId) return redirectToSignIn();

  const form = await prisma.form.findUnique({
    where: {
      id: formId,
    },
    include: {
      questions: {
        orderBy: {
          order: "asc",
        },
      },
      _count: {
        select: {
          responses: true,
        },
      },
    },
  });

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1></h1>
        </div>
        <div>button</div>
      </div>
    </div>
  );
};

export default FormDetailsPage;
