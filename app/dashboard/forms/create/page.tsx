import FormBuilder from "@/components/forms/form-builder";

const CreateFormPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold ">Create New Form</h1>
        <p className="text-gray-500 mt-1">Design your custom form</p>
      </div>

      <FormBuilder />
    </div>
  );
};

export default CreateFormPage;
