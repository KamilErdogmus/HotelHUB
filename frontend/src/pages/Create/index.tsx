import { Field, Form, Formik } from "formik";
import HOC from "../../HOC/HOC";
import { initial, inputs } from "../../constants";
import Button from "../../Components/Button";
import { PlaceData } from "../../types";
import { useMutation } from "@tanstack/react-query";
import { createPlace } from "../../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (body: PlaceData) => createPlace(body),
    onSuccess: () => {
      toast.success("Place Created!");
      navigate("/");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const handleSubmit = (values: PlaceData) => {
    // Readonly olduğu için kopyasını aldık
    const body = { ...values };
    // Özellikleri diziye çevir
    body.amenities = (values.amenities as string).split(",");
    console.log("Submitting to API:", body);
    // Apiye istek at
    mutate(body);
  };

  return (
    <HOC>
      <Formik onSubmit={handleSubmit} initialValues={initial}>
        <Form className="max-w-2xl mx-auto grid grid-cols-1 gap-5">
          {inputs.map((data) => (
            <div className="flex flex-col gap-3" key={data.name}>
              <label className="font-bold" htmlFor={data.name}>
                {data.label}
              </label>
              <Field
                type={data.type || "text"}
                name={data.name}
                id={data.name}
                placeholder={data.placeholder}
                className={`${
                  data.type === "checkbox"
                    ? "scale-[2]"
                    : "border w-full shadow"
                } py-2 px-4 rounded-md`}
              />
            </div>
          ))}
          <Button
            disabled={isPending}
            fnc="submit"
            text="Create"
          />
        </Form>
      </Formik>
    </HOC>
  );
};

export default Create;
