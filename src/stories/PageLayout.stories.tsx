import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { PageLayout } from "../../lib/components/PageLayout";

const Pane: React.FC<
    React.PropsWithChildren<{ name: string }>
> = ({ children, name }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                border: "solid 1px black",
            }}
        >
            <span style={{ fontSize: "xx-large", fontWeight: "bold" }}>
                {name} Pane
            </span>
            <span>{children}</span>
        </div>
    );
};

const meta = {
    title: "Components/PageLayout",
    component: PageLayout,
    render: () => (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "lightgrey",
            }}
        >
            <PageLayout
                left={
                    <Pane name="Left">
                        <div style={{ fontWeight: "bold" }}>
                            *This pane is hidden in mobile view.
                        </div>
                        The content on the left.
                        Change the preview size to see mobile view.
                    </Pane>
                }
                right={
                    <Pane name="Right">
                        The content on the right.
                    </Pane>
                }
            >
                <Pane name="Content">
                    <div style={{ fontWeight: "bold" }}>
                        The content is rendered here. The content can be passed
                        as children.
                    </div>
                    <div style={{textWrap: "wrap"}}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </Pane>
            </PageLayout>
        </div>
    ),
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    name: "PageLayout",
};
