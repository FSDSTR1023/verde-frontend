import { screen, render } from "@testing-library/react";
import { describe, expect } from "vitest";
import React from 'react';
import { test } from 'vitest';
import ButtonNavbar from './ButtonNavbar';

describe("<Navbar/>", () => {

    test("'INICIO' should be on the screen", () => {
        // const inicio = 
        render(<ButtonNavbar>algo</ButtonNavbar>);
        // expect(screen.queryByText("Disabled button")).toBeDisabled();
        // expect(screen.getByText("INICIO")).toBeDefined();
        screen.debug();
        // expect(inicio.getByText('INICIO')).toBeDefined();
        expect(screen.getByText('algo')).toBeDefined()
    });

    // it("is blue class is primary", () => {
    //     expect(screen.queryByText(/Text of the button/i)).toHaveClass("primary");
    // });

    // it("when outlined is true, it has the outlined class", () => {
    //     expect(screen.getByTestId("root-button")).toHaveClass("outlined");
    // });

    // it("an icon is shown when icon is passed", () => {
    //     screen.queryByText("👍");
    // });
});