"use client";
import React, { useEffect, useRef, useState } from "react";

import { ServiceCard } from "./ServiceCard";
import { Container } from "../../ui/Container";
import { VSpace } from "../../ui/VSpace";
import { TheForm } from "./TheForm";
// Hooks & Utils
import { useContactForm } from "@/app/lib/hooks/useContactForm";
import { cn } from "@/app/lib/utils";
// Data
import { services } from "./data";
// Types
import type { ServiceType } from "../types";

export const ContactForm = () => {
  const [selectedService, setSelectedService] = useState<ServiceType>(
    services[0],
  );
  const formRef = useRef<HTMLFormElement>(null);
  const { isSubmitting } = useContactForm(selectedService);

  useEffect(() => {
    console.log(isSubmitting);
  }, [isSubmitting]);

  return (
    <section
      className={cn(
        "py-size-45",
        "relative",
        isSubmitting && "pointer-events-none opacity-50",
      )}
    >
      <Container>
        <VSpace>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr]">
            <aside className="grid grid-cols-1 gap-4">
              {services.map((service) => (
                <ServiceCard
                  title={service.title}
                  formTitle={service.formTitle}
                  image={service.image}
                  subtitle={service.subtitle}
                  key={service.title}
                  isSelected={selectedService.title === service.title}
                  onClick={() => setSelectedService(service)}
                  contactType={service.contactType}
                />
              ))}
            </aside>
            <div>
              <h2 className="mb-6 text-center text-xl font-semibold capitalize">
                {selectedService.formTitle}
              </h2>

              <TheForm formRef={formRef} selectedService={selectedService} />
            </div>
          </div>
        </VSpace>
      </Container>
    </section>
  );
};
