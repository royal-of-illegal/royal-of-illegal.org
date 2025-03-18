import org.springframework.web.bind.annotation.*;

@RestController
public class App {
    @GetMapping("/api/data")
    public String getData() {
        return "{\"message\": \"Java backend running!\"}";
    }
}
