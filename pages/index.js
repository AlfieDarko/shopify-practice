import { Page, Layout, EmptyState, ResourcePicker } from "@shopify/polaris";
import React, { Component } from "react";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Index extends Component {
  state = { open: false };
  handleSelection = resources => {
    const idsFromResources = resources.selection.map(product => product.id);
    this.setState({ open: false });
    console.log(resources);
  };
  render() {
    return (
      <Page
        primaryAction={{
          content: "Selected products",
          onAction: () => this.setState({ open: true })
        }}
      >
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={resources => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        <Layout>
          <EmptyState
            heading="Discount your products temporarily"
            action={{
              content: "Select products",
              onAction: () => this.setState({ open: true })
            }}
            image={img}
          >
            <p> Select products to change their price temporarily.</p>
          </EmptyState>
        </Layout>
      </Page>
    );
  }
}

export default Index;
