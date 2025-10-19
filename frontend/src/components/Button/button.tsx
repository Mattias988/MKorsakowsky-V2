// components/ui/Button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx"; // Używamy clsx

// Importuj nasze style SCSS
import styles from "./Button.module.scss";

// Definicja wariantów CVA mapująca na klasy SCSS
const buttonVariants = cva(
    styles.button, // Podstawowa klasa .button
    {
        variants: {
            variant: {
                default: styles["variant-default"],
                destructive: styles["variant-destructive"],
                outline: styles["variant-outline"],
                secondary: styles["variant-secondary"],
                ghost: styles["variant-ghost"],
                link: styles["variant-link"],
            },
            size: {
                default: styles["size-default"],
                sm: styles["size-sm"],
                lg: styles["size-lg"],
                icon: styles["size-icon"],
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

// Definicja propsów
export interface ButtonProps
    extends React.ComponentProps<"button">,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        // Sprawdza, czy jedynym dzieckiem jest SVG (dla logiki `has-[>svg]`)
        const hasSvg =
            size !== "icon" &&
            React.Children.count(children) === 1 &&
            React.Children.toArray(children).some(
                (child) => React.isValidElement(child) && child.type === "svg"
            );

        return (
            <Comp
                data-slot="button"
                className={clsx(
                    buttonVariants({ variant, size }),
                    hasSvg && styles["has-svg"], // Dodatkowa klasa dla `has-[>svg]`
                    className // Inne klasy przekazane z zewnątrz
                )}
                ref={ref}
                {...props}
            >
                {children}
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };