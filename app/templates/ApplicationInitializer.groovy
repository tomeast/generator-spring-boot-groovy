package <%= projectName %>

import org.springframework.boot.builder.SpringApplicationBuilder
import org.springframework.boot.web.SpringBootServletInitializer

class ApplicationInitializer extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class)
    }

}
