"use client";
import { sendMessage } from "@/utils/sendMessage";
import { validateField } from "@/utils/validation";
import { Input } from "@heroui/react";
import { useState } from "react";
import CustomBtn from "./Buttons/СustomBtn";
import { useRouter } from "next/navigation";

export default function FeedbackForm({ title, variant, modal, presentation }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [formErrors, setFormErrors] = useState({
    phone: "",
  });

  const [touchedFields, setTouchedFields] = useState({
    phone: false,
  });

  const handleSubmit = async () => {
    const errors = {
      phone: validateField("phone", formData.phone),
    };

    setFormErrors(errors);

    if (!errors.phone) {
      const message = `${
        presentation
          ? ` ❓ Презентація:
        - Телефон: ${formData.phone}`
          : ` ❓ Заявка:
        - Ім'я: ${formData.name}
        - Телефон: ${formData.phone}`
      }
       
      `;
      console.log(message);
      await sendMessage(message);
      presentation ? router.push("/presentation") : router.push("/thanks");

      setFormData({
        name: "",
        phone: "",
      });
      setFormErrors({
        phone: "",
      });
      setTouchedFields({
        phone: false,
      });
    } else {
      console.log("Помилки валідації:", errors);
    }
  };

  const handleBlur = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setFormErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const handleFormDataChange = (field, value) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData, [field]: value };

      return updatedData;
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    handleFormDataChange(name, value);
  };

  const { name, phone } = formData;

  return (
    <div className="max-w-[360px] mx-auto">
      <h2
        className={`font-michelin ${
          variant === "secondary"
            ? "text-white text-lg"
            : variant === "modal"
            ? "text-center font-bold text-[20px] md:text-[28px] leading-[1.22] dark-txt-gradient mb-7"
            : "yellow-txt-gradient font-bold text-[24px] md:text-[28px] leading-[1.22]"
        }  sm:dark-txt-gradient mb-7`}
      >
        {title}
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col gap-3 w-full mx-auto "
      >
        {!presentation && (
          <div className="relative">
            <Input
              classNames={{
                inputWrapper:
                  "group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0",
              }}
              className={`block w-full mb-1 rounded-[4px] customInput overflow-hidden  ${
                modal && "whiteText"
              }`}
              placeholder="Імʼя та прізвище"
              name="name"
              value={name}
              onChange={handleChange}
              onBlur={() => handleBlur("name")}
            />
            {formErrors.name && touchedFields.name && (
              <p className="text-[#F31260] text-[10px] absolute top-[100%]">
                {formErrors.name}
              </p>
            )}
          </div>
        )}

        <div className="relative">
          <Input
            classNames={{
              inputWrapper:
                "group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0",
            }}
            className={`block w-full mb-1 rounded-[4px]  customInput overflow-hidden ${
              modal && "whiteText"
            }`}
            placeholder="Номер телефону"
            name="phone"
            value={phone}
            onChange={handleChange}
            onBlur={() => handleBlur("phone")}
          />
          {formErrors.phone && touchedFields.phone && (
            <p className="text-[#F31260] text-[10px] absolute top-[100%]">
              {formErrors.phone}
            </p>
          )}
        </div>

        <div className="mt-2">
          <CustomBtn
            variant={modal ? "modal" : "form"}
            type="submit"
            text={`${presentation ? "Отримати презентацію" : "Надіслати"}`}
          />
        </div>
      </form>
    </div>
  );
}
