FlowRouter.route("/", {  
    name: "Home",
    action(params){
        renderMainLayout(<MainView content={<Home/>}/>);
    }
});

FlowRouter.route("/Shop",{
    action(params){
        renderMainLayout(<MainView content={<Shop/>}/>);
    }
});

function renderMainLayout(mainComponent){
    ReactLayout.render(MainLayout, {
        header: <Header />,
        content: mainComponent,
        footer: <Footer />
    })
}