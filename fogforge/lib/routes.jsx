FlowRouter.route("/", {  
    name: "Home",
    action(params){
        ReactLayout.render(Home);
    }
});

function renderMainLayout(component){
    ReactLayout.render(MainLayout, {
        header: <Header />,
        content: component,
        footer: <Footer />
    })
}