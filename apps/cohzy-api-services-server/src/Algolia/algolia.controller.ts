import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AlgoliaService } from "./algolia.service";
import { AlgoliaInputDto } from "../algolia/AlgoliaInputDto";

@swagger.ApiTags("algolias")
@common.Controller("algolias")
export class AlgoliaController {
  constructor(protected readonly service: AlgoliaService) {}

  @common.Post("/send")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendDataToAlgolia(
    @common.Body()
    body: AlgoliaInputDto
  ): Promise<string> {
        return this.service.SendDataToAlgolia(body);
      }
}
