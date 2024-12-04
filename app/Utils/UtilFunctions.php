<?php

namespace App\Utils;

use PhpOffice\PhpSpreadsheet\Cell\Hyperlink;
use PhpOffice\PhpSpreadsheet\Style\Font;

class UtilFunctions
{

    public static function generateReportAttendanceVehicle($sedes, $headers, $period)
    {
        $excelUI = new ExcelUI(Constants::REPORTES, Constants::REPORTE_RECLAMOS);

        $headerRow = 5;
        $headerCol = $excelUI->getColumnIndex("H");

        $excelUI->setTextCell("C3", $period);
        $sheetIndex = 0;

        foreach ($sedes as $sede => $complaints) {
            $indexClone = $excelUI->getIndexOfSheet("Base");
            $excelUI->cloneSheet($indexClone, $sheetIndex++, $sede, true);
            $excelUI->setTextCell("A2", "RECLAMOS DE " . strtoupper($sede));

            $col = $excelUI->getColumnIndex("A");
            $indexRow = 6;
            $index = 1;

            foreach ($headers as $header) {
                $excelUI->changeStyleSelectedHeader(true, "C", ExcelUI::$GENERAL, false, ExcelUI::$BACKGROUND_CELL_HEADER, true);
                $excelUI->setDataCellByIndex($headerRow, $headerCol++, $header);
            }

            foreach ($complaints as $complaint) {
                $complaint = json_decode($complaint->toJson());
                $indexCol = $col;
                if ($indexRow % 2 == 0) {
                    $excelUI->changeStyleSelected(false, "C", ExcelUI::$GENERAL, true, ExcelUI::$BACKGROUND_CELL_PRIMARY, true);
                } else {
                    $excelUI->changeStyleSelected(false, "C", ExcelUI::$GENERAL, true, ExcelUI::$BACKGROUND_CELL_SECONDARY, true);
                }

                $excelUI->setRowHeight($indexRow, 30);
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, $index++);
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, $complaint->complaintCode);
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, $complaint->customer);
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, $complaint->customerDocument);
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, $complaint->customerEmail);
                $excelUI->setDataCellByIndex($indexRow, $indexCol++, $complaint->status);
                $attentionLink = new Hyperlink($complaint->link, 'Ver Reclamo');
                $coordinates = $excelUI->getCellCoordinates($indexRow, $indexCol++);
                $excelUI->getActiveSheet()->setCellValue($coordinates, 'Ver Reclamo');
                $excelUI->getActiveSheet()->getCell($coordinates)->setHyperlink($attentionLink);
                $excelUI->getActiveSheet()->getStyle($coordinates)->applyFromArray([
                    'font' => [
                        'color' => ['rgb' => '0563C1'],
                        'underline' => Font::UNDERLINE_SINGLE,
                    ],
                    'alignment' => ['horizontal' => 'center'],
                    'fill' => [
                        'fillType' => 'solid',
                        'startColor' => ['rgb' => 'F0F7FE'],
                    ],
                ]);

                $indexRow++;
            }
        }

        $excelUI->deleteSheet($excelUI->getIndexOfSheet("Base"));
        $excelUI->setActiveSheetIndex(0);

        $bytes = $excelUI->save();
        unset($excelUI);
        return $bytes;
    }


}
